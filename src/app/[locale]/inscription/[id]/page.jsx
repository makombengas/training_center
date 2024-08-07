"use client"

import Image from "next/image"
import { useState } from 'react';


const InsCriptionPage = ({
  searchParams
}) => {
  console.log(searchParams)

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    date_naissance: '',
    email: '',
    telephone: '',
    formation: '',
    niveau_etudes: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // Ajoutez ici la logique pour envoyer les données au serveur
  };
  return (
    <div className="w-full h-full flex justify-center items-center">

            <div className="w-full h-full">
                <Image className='w-full h-[20rem] object-cover' src={searchParams.image} alt={searchParams.titre} width={1000} height={1000} />
                <div className="w-full h-[20rem] absolute flex justify-center z-10 items-center top-0 bg-gradient-to-b from-[#ffffff] from-35% via-[#000000] via-35% to-[#d4d3d342] to-90%">
                    <h1 className="text-2xl sm:text-5xl px-4 text-center text-white font-bold mt-24">{searchParams.titre}</h1>
                </div>
                <div className="">
            <div className="max-w-7xl mx-auto p-6 mt-20 mb-20">

      <h1 className="text-3xl font-bold text-center text-gray-800  mb-16">Formulaire {"d'inscription"}</h1>
      <div className="flex items-center justify-center gap-8 w-full">
        <div className="flex-3">
            <form onSubmit={handleSubmit} className="space-y-6 ">
            <div className="flex items-center gap-4 justify-between flex-wrap">
              <div className="flex flex-col gap-2" >
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
                <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required 
                      className="mt-1  bg-slate-200 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom</label>
                <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required 
                      className="mt-1  bg-slate-200 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap">
              <div className="flex flex-col gap-2">
                <label htmlFor="date_naissance" className="block text-sm font-medium text-gray-700">Date de naissance</label>
                <input type="date" id="date_naissance" name="date_naissance" value={formData.date_naissance} onChange={handleChange} required 
                      className="mt-1  bg-slate-200 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required 
                      className="mt-1  bg-slate-200 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
              <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} required 
                    className="mt-1 bg-slate-200 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="formation" className="block text-sm font-medium text-gray-700">Formation choisie</label>
              <select id="formation" name="formation" value={formData.formation} onChange={handleChange} required
                      className="mt-1  bg-slate-200 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option value="">{searchParams.titre} </option>
                
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="niveau_etudes" className="block text-sm font-medium text-gray-700">Niveau {"d'études"} actuel</label>
              <input type="text" id="niveau_etudes" name="niveau_etudes" value={formData.niveau_etudes} onChange={handleChange} required 
                    className="mt-1  bg-slate-200 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (optionnel)</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}
                        className="mt-1  bg-slate-200 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>

            <div>
              <button type="submit" 
                      className="w-full mt-4 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#143159] hover:bg-[#90764A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {"S'inscrire"}
              </button>
            </div>
          </form>
        </div>
        <div className="flex-[.5] flex justify-center items-center ">
            <Image className="w-full object-center h-[42.6rem] object-cover" src={searchParams.image} alt={searchParams.image}  width={1000} height={1000} />
        </div>
      </div>
     
    </div>
                </div>
            </div>

        </div>
  )
}

export default InsCriptionPage 