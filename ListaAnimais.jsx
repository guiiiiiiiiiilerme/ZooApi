// src/components/ListaAnimais.jsx
import React, { useEffect, useState } from 'react';
import { getAnimais, createAnimal, updateAnimal, deleteAnimal } from '../services/api';

const ListaAnimais = () => {
    const [animais, setAnimais] = useState([]);
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        dataNascimento: '',
        especie: '',
        habitat: '',
        paisOrigem: '',
    });
    const [editandoId, setEditandoId] = useState(null);

    const carregarAnimais = async () => {
        const data = await getAnimais();
        setAnimais(data);
    };

    useEffect(() => {
        carregarAnimais();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editandoId) {
            await updateAnimal(editandoId, { id: editandoId, ...formData });
        } else {
            await createAnimal(formData);
        }
        setFormData({ nome: '', descricao: '', dataNascimento: '', especie: '', habitat: '', paisOrigem: '' });
        setEditandoId(null);
        carregarAnimais();
    };

    const handleEdit = (animal) => {
        setFormData({
            nome: animal.nome,
            descricao: animal.descricao,
            dataNascimento: animal.dataNascimento.split('T')[0], // só a data
            especie: animal.especie,
            habitat: animal.habitat,
            paisOrigem: animal.paisOrigem,
        });
        setEditandoId(animal.id);
    };

    const handleDelete = async (id) => {
        await deleteAnimal(id);
        carregarAnimais();
    };

    return (
        <div>
            <h2>Animais</h2>

            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input name="Leão" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
                <input name="Rei da Selva" placeholder="Descrição" value={formData.descricao} onChange={handleChange} required />
                <input name="17/05/2015" type="date" value={formData.dataNascimento} onChange={handleChange} required />
                <input name="Felino" placeholder="Espécie" value={formData.especie} onChange={handleChange} required />
                <input name="Savana" placeholder="Habitat" value={formData.habitat} onChange={handleChange} required />
                <input name="Africa do Sul" placeholder="País de Origem" value={formData.paisOrigem} onChange={handleChange} required />
                <button type="submit">{editandoId ? 'Atualizar' : 'Cadastrar'}</button>
            </form>

            <ul>
                {animais.map(animal => (
                    <li key={animal.id}>
                        <strong>{animal.nome}</strong> - {animal.especie} | {animal.habitat} | Nasc: {new Date(animal.dataNascimento).toLocaleDateString()}
                        <button onClick={() => handleEdit(animal)}>Editar</button>
                        <button onClick={() => handleDelete(animal.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaAnimais;
