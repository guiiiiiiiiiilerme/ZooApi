// src/App.jsx
import React, { useEffect, useState } from 'react';
import { getCuidados, createCuidado, updateCuidado, deleteCuidado } from '../services/api';

const ListaCuidados = () => {
    const [cuidados, setCuidados] = useState([]);
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        frequencia: '',
    });
    const [editandoId, setEditandoId] = useState(null);

    const carregarCuidados = async () => {
        const data = await getCuidados();
        setCuidados(data);
    };

    useEffect(() => {
        carregarCuidados();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editandoId) {
            await updateCuidado(editandoId, { id: editandoId, ...formData });
        } else {
            await createCuidado(formData);
        }
        setFormData({ nome: '', descricao: '', frequencia: '' });
        setEditandoId(null);
        carregarCuidados();
    };

    const handleEdit = (cuidado) => {
        setFormData({
            nome: cuidado.nome,
            descricao: cuidado.descricao,
            frequencia: cuidado.frequencia,
        });
        setEditandoId(cuidado.id);
    };

    const handleDelete = async (id) => {
        await deleteCuidado(id);
        carregarCuidados();
    };

    return (
        <div>
            <h1>Gerenciador de Cuidados</h1>
            <h2>Cuidados</h2>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
                <input name="descricao" placeholder="Descrição" value={formData.descricao} onChange={handleChange} required />
                <input name="frequencia" placeholder="Frequência" value={formData.frequencia} onChange={handleChange} required />
                <button type="submit">{editandoId ? 'Atualizar' : 'Cadastrar'}</button>
            </form>
            <ul>
                {cuidados.map(cuidado => (
                    <li key={cuidado.id}>
                        <strong>{cuidado.nome}</strong> - {cuidado.descricao} | {cuidado.frequencia}
                        <button onClick={() => handleEdit(cuidado)}>Editar</button>
                        <button onClick={() => handleDelete(cuidado.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaCuidados;
