import "./style.css";

function Aside({
  arrayToFilter,
  setArrayToFilter,
  search,
  setSearch,
  agendamentosFilter,
  setModalIsOpen,
  setMeuObjeto,
  setTeste,
}) {
  return (
    <aside>
      <div id="searchDiv">
        <label htmlFor="search">Pesquise o agendamento por título</label>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h3 id="agendamentos"> Ordenar agendamentos por:</h3>
      <div id="filters">
        <button
          className="filtersButton"
          onClick={() => {
            setArrayToFilter(
              agendamentosFilter.sort((a, b) => {
                if (a.startDate < b.startDate) {
                  return -1;
                } else {
                  return true;
                }
              })
            );
          }}
        >
          ↑ Data de ínicio
        </button>
        <button
          className="filtersButton"
          onClick={() => {
            setArrayToFilter(
              agendamentosFilter.sort((a, b) => {
                if (a.endDate < b.endDate) {
                  return -1;
                } else {
                  return true;
                }
              })
            );
          }}
        >
          ↓ Data de fim
        </button>
        <button
          className="filtersButton"
          onClick={() => {
            setArrayToFilter(
              agendamentosFilter.sort((a, b) => {
                if (a.id < b.id) {
                  return -1;
                } else {
                  return true;
                }
              })
            );
          }}
        >
          ↕ Data de criação
        </button>
      </div>

      <div id="agendamentosContainer">
        {agendamentosFilter.map((n, index) => {
          return (
            <div className="cardContainer">
              <div className="tag"></div>
              <div className="card" key={index}>
                <p className="title">{n.title}</p>{" "}
                <p className="description">Descrição: {n.description}</p>
                <div className="dates">
                  <p className="date">Horário de início: {n.startDate}</p>
                  <p className="date">Horário de fim: {n.endDate}</p>
                </div>
                <button
                  className="delete button"
                  onClick={() => {
                    setArrayToFilter(
                      agendamentosFilter.filter(
                        (item) => item.title !== n.title
                      )
                    );
                  }}
                  key={index}
                >
                  excluir
                </button>
                <button
                  className="edit button"
                  onClick={() => {
                    setModalIsOpen(true);
                    const taskIndex = agendamentosFilter.filter(
                      (item) => item.id === n.id
                    );
                    const agendamentoId = taskIndex[0].id;
                    console.log(agendamentoId);
                    setMeuObjeto(agendamentoId);

                    const spreadArray = [...arrayToFilter];
                    setTeste({
                      title: spreadArray[agendamentoId].title,
                      description: spreadArray[agendamentoId].description,
                      startDate: spreadArray[agendamentoId].startDate,
                      endDate: spreadArray[agendamentoId].endDate,
                    });
                  }}
                >
                  editar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default Aside;
