import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { DataGrid } from "@material-ui/data-grid";
import { useEffect } from "react";
import { loadCharacters } from "../../redux/actions/loadAndPutCharacters";
import { connect } from "react-redux";
import { showModal, hideModal } from "../../redux/actions/modal";
import Pagination from "@material-ui/lab/Pagination";
import "./Table.css";

const columns = [
  { field: "id", headerName: "№", width: 70, align: "center" },
  { field: "name", headerName: "Name", width: 150, align: "center" },
  { field: "status", headerName: "Status", width: 130, align: "center" },
  { field: "species", headerName: "Species", width: 120, align: "center" },
  { field: "gender", headerName: "Gender", width: 120, align: "center" },
];

function Table({
  onloadCharacters,
  characters,
  modal,
  showModal,
  hideModal,
  pages,
  modalImage,
  modalName,
  modalStatus,
  modalSpecies,
  modalGender,
  page,
}) {

  useEffect(() => {
    onloadCharacters();
  }, [onloadCharacters]);

  characters.map((character) => {
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      gender: character.gender,
    };
  });

  const onShowModal = (character) => {
    showModal(character);
  };

  const pageChange = (page) => {
    // ПРИНИМАЕТ PAGE
    onloadCharacters(page);
  };

  return (
    <div>
      <div className="container">
        <DataGrid
          className="DataGrid"
          rows={characters}
          columns={columns}
          pageSize={10}
          disableColumnMenu={true}
          hideFooter={true}
          autoHeight
          autoPageSize
          onRowClick={onShowModal}
        />
        <Modal
          className="modal"
          open={modal}
          onClose={hideModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 1500,
          }}
        >
          <Fade in={modal}>
            <div className="fade">
              <img className="picture" src={modalImage} alt="logo" />
              <h2>{modalName}</h2>
              <p>{modalStatus}</p>
              <p>{modalSpecies}</p>
              <p>{modalGender}</p>
            </div>
          </Fade>
        </Modal>
      </div>
      <div className="pagination">
        <Pagination
          count={pages}
          page={page}
          boundaryCount={2}
          color="primary"
          onChange={(event, page) => pageChange(page)}
          showFirstButton
          showLastButton
          size="large"
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // page: state.putCharacters.page,
    pages: state.putCharacters.pages,
    characters: state.putCharacters.characters,
    modal: state.modal.modal,
    modalImage: state.modal.image,
    modalName: state.modal.name,
    modalStatus: state.modal.status,
    modalSpecies: state.modal.species,
    modalGender: state.modal.gender,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onloadCharacters: (page) => dispatch(loadCharacters(page)),
    showModal: (character) => dispatch(showModal(character)),
    hideModal: () => dispatch(hideModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
