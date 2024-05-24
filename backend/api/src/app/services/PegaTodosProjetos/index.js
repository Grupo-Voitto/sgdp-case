import Projetos from '../../models/Projetos';
import Tarefas from '../../models/Tarefas';
import Areas from '../../models/Areas';
import { calculaProgresso } from '../../helper';
import ProjetosMembros from '../../models/ProjetosMembros';
import Membros from '../../models/Membros';
import {Op} from 'sequelize';

class PegaTodosProjetos {
  async all() {
    const projetos = await Projetos.findAll({ attributes: ['id', 'title', 'status', 'area'] });

    const areas = await Areas.findAll();

    const tarefas_projeto = await Promise.all(
      projetos.map(async elem => {
        const [pega_tarefa, area_projeto] = await Promise.all([
          Tarefas.findAll({
            where:{
              id_projeto: elem.id
            },
          }),
          Areas.findOne({
            where: {
              id: elem.area
            }
          })
        ])

        return {
          id_projeto: elem.id,
          titulo: elem.title,
          total_tarefas: pega_tarefa.length,
          tarefas_concluidas: (pega_tarefa.filter(item => item.status != 0)).length,
          status: elem.status,
          progresso: (calculaProgresso(pega_tarefa.length, (pega_tarefa.filter(item => item.status != 0)).length)).toFixed(0),
          area: area_projeto
        }
      })
    );

    const payload = {
      concluidos: tarefas_projeto.filter(elem => elem.status == 2),
      em_andamento: tarefas_projeto.filter(elem => elem.status == 1),
      congelado: tarefas_projeto.filter(elem => elem.status == 0),
    }

    return payload;
  }
  async get(id_projeto) {
    const projeto = await Projetos.findByPk(id_projeto);

    if (!projeto) {
      throw new Error("Projeto não encontrado");
    }

    const areas = await Areas.findByPk(projeto.area);

    const tarefas_projeto = await Tarefas.findAll({
      where: {
        id_projeto: id_projeto
      }
    });
    const membros_projeto = await ProjetosMembros.findAll({
      where:{
        id_projeto
      },
      attributes:['id_membro']
    });

    const membros = await Membros.findAll({
      where:{
        id: {
          [Op.in]: membros_projeto.map(elem=>elem.id_membro)
        }
      }
    })


    return {
      id_projeto: id_projeto,
      titulo: projeto.title,
      descricao: projeto.description,
      status: projeto.status,
      dead_line: projeto.dead_line,
      data_inicio: projeto.created_at,
      area: areas,
      membros,
      tarefas: tarefas_projeto,
      progresso: (calculaProgresso(tarefas_projeto.length, (tarefas_projeto.filter(item => item.status != 0)).length)).toFixed(0)
    }

  }
  async dashboard() {
    const projetos = await Projetos.findAll({ attributes: ['id', 'title', 'status', 'area'] });


    const areas = await Areas.findAll();

    const tarefas_projeto = await Promise.all(
      projetos.map(async elem => {
        const pega_tarefa = await Tarefas.findAll({
          where: {
            id_projeto: elem.id
          }
        })

        return {
          id_projeto: elem.id,
          titulo: elem.title,
          total_tarefas: pega_tarefa.length,
          tarefas_concluidas: (pega_tarefa.filter(item => item.status != 0)).length,
          status: elem.status,
          area: areas.filter(a => a.id == elem.area)[0],
          progresso: (calculaProgresso(pega_tarefa.length, (pega_tarefa.filter(item => item.status != 0)).length)).toFixed(0)
        }
      })
    );


    const top_projetos = tarefas_projeto.sort((a, b) => {
      return b.progresso - a.progresso;
    }).filter((_, index) => index < 4);

    const em_andamento = tarefas_projeto.filter(item => item.status == 2)


    return {
      top_projetos, em_andamento, grafico: {
        concluidos: projetos.filter(item => item.status == 2).length,
        andamento: projetos.filter(item => item.status == 1).length
      }
    };
  }

}

export default new PegaTodosProjetos();
