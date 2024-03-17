// NoProjectSelected.js
import React from 'react';
import Button from './Button';
import noProjectImg from '../assets/no-projects.png';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProjectImg} alt="an empty task list" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">No project Selected</h2>
      <p className="text-stone-500 mb-4"> Select a project and  get started with new one </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
