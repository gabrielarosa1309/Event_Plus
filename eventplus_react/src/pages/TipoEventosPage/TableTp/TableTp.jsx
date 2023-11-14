import React from 'react';
import './TableTp.css';
import edtPen from '../../../assets/images/images/edit-pen.svg';
import trashDelete from '../../../assets/images/images/trash-delete.svg';

const TableTp = ({dados, fnDelete = null, fnUpdate = null}) => {
    return (
        <table className='table-data'>
            {/* CABEÇALHO */}
            <thead className="table-data__head">
                <tr className="table-data__head-row">
                    <th className="table-data__head-title table-data__head-title--big">Título</th>
                    <th className="table-data__head-title table-data__head-title--little">Editar</th>
                    <th className="table-data__head-title table-data__head-title--little">Deletar</th>
                </tr>
            </thead>
            {/* CORPO */}
            <tbody>
                {dados.map((tp) => {
                    return (
                        <tr className="table-data__head-row">
                            <td className="table-data__data table-data__data--big">
                                {tp.titulo}
                            </td>

                            <td className="table-data__data table-data__data--little">
                                <img className="table-data__icon" src={edtPen} alt="Ícone em forma de caneta que edita o tipo de evento" />
                            </td>

                            <td className="table-data__data table-data__data--little">
                                <img className="table-data__icon" src={trashDelete} alt="Ícone em forma de lata de lixo que exclui o tipo de evento" />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TableTp;