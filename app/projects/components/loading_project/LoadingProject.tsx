import React from 'react';
import {
  cProjectLoading_image,
  cProjectLoading_project,
  cProjectLoading_tech,
  cProjectLoading_techContainer,
  cProjectLoading_texts,
  cProjectLoading_title,
} from './LoadingProject.styles';

export default function LoadingProject() {
  const fakeLoading: any[] = new Array(6).fill(null);

  return (
    <div className={cProjectLoading_project}>
      <div className={cProjectLoading_title} />
      <div className={cProjectLoading_texts} />
      <div className={cProjectLoading_image} />
      <div className={cProjectLoading_techContainer}>
        {fakeLoading.map((_, index) => {
          return <div key={index} className={cProjectLoading_tech} />;
        })}
      </div>
    </div>
  );
}
