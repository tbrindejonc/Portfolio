import React from 'react';
import {
  cProject_consultContainer,
  cProject_descriptionContainer,
  cProject_detailsContainer,
  cProject_project,
  cProject_techContainer,
  cProject_texts,
  cProject_viewContainer,
} from '../project/Project.styles';

export default function LoadingProject() {
  return (
    <div className={cProject_project('left')}>
      <div className={cProject_descriptionContainer('left')}>
        <div className={cProject_texts('left')} />
        <div />
      </div>
      <div className={cProject_detailsContainer}>
        <div className={cProject_techContainer('left')} />
        <div className={cProject_viewContainer('left')}>
          <div className={cProject_consultContainer('left')} />
        </div>
      </div>
    </div>
  );
}
