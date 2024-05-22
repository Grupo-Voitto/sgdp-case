import Projetos from '../../models/Projetos';
import Tarefas from '../../models/Tarefas';
import Areas from '../../models/Areas';
import {calculaProgresso} from '../../helper';

class PegaTodosProjetos {
  async all() {
    const projetos = await Projetos.findAll({attributes:['id','title','status','area']});

    const tarefas_projeto = await Promise.all(
      projetos.map(async elem => {
        const pega_tarefa = await Tarefas.findAll({
          where:{
            id_projeto: elem.id
          }
        })

        return {
          id_projeto: elem.id,
          total_tarefas: pega_tarefa.length,
          tarefas_concluidas: (pega_tarefa.filter(item => item.status != 0)).length,
          status: elem.status,
          area: elem.area
        }
      })
    );

    return tarefas_projeto;
  }
  async dashboard() {
    const projetos = await Projetos.findAll({attributes:['id','title','status','area']});


    const areas = await Areas.findAll();

    const tarefas_projeto = await Promise.all(
      projetos.map(async elem => {
        const pega_tarefa = await Tarefas.findAll({
          where:{
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


    const top_projetos = tarefas_projeto.sort((a, b) =>  {
      return b.progresso - a.progresso;
    }).filter((_, index) => index < 4);

    const em_andamento = tarefas_projeto.filter(item => item.status == 2)


    return {top_projetos,em_andamento, grafico: {
      concluidos: projetos.filter(item => item.status == 2).length,
      andamento: projetos.filter(item => item.status == 1).length
    }};
  }
  
}

export default new PegaTodosProjetos();
