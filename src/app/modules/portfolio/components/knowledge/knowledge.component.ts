import { Component, signal } from '@angular/core';
import { IKnowledge } from '../interface/knowledgeInterface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de Html5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de Css3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de Javascript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento de NodeJs'
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone de conhecimento de Java'
    },
    {
      src: 'assets/icons/knowledge/python.svg',
      alt: 'Ícone de conhecimento de Python'
    },
  ])
}
