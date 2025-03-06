import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { single } from 'rxjs';
import { IProjects } from '../interface/projects';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal <IProjects[]> ([
    {
      src: 'assets/img/projects/brow.png',
      alt: '',
      title: 'Matemática Brow',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://docs.google.com/presentation/d/1RTBSo61QTrYCrrHfg7yIG6a-o5373LCcCqHFm0LlzVk/edit?usp=sharing',
        },
      ],
    },
    {
      src: 'assets/img/projects/enter.png',
      alt: '',
      title: 'Enter Agencia',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://docs.google.com/presentation/d/1nPv4b0rjqayb9Fph-17Zqc456WRZEq_KTCXcIqRka7Y/edit?usp=sharing',
        },
      ],
    },
    {
      src: 'assets/img/projects/sefa.png',
      alt: '',
      title: 'Secretaria da Fazenda',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://docs.google.com/presentation/d/12mATrOWV-93BJJdQdp69c7Wx1lb3l6bjDLfE23DXtkk/edit?usp=sharing',
        },
      ],
    },
    {
      src: 'assets/img/projects/plane.png',
      alt: '',
      title: 'Plane Design',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://docs.google.com/presentation/d/1G5A0dk62sqWyVPA2d4xhoIiQu2ofaqUSYgBKbWeJZkg/edit?usp=sharing',
        },
      ],
    },
    {
      src: 'assets/img/projects/gemelo.png',
      alt: '',
      title: 'Gemelo Marketing e Consultoria',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://docs.google.com/presentation/d/1lMpAMHfYbCPmd8QbhuuoTLJeyDBpvmK8tJqaCUewoHE/edit?usp=sharing',
        },
      ],
    },
  ]);

}
