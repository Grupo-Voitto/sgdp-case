import Projetos from '../../models/Projetos';
import Tarefas from '../../models/Tarefas';

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
    )



    return tarefas_projeto;
  }
}

export default new PegaTodosProjetos();
