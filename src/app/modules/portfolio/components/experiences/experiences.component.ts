import { Component, signal } from '@angular/core';
import { IExperiences } from '../interface/experiences';



@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Matemática Brow - Web Designer/ Designer Gráfico',
        p: 'CLT | Março 2024 - Presente',
      },
      text: '<p>Desde 2022, faço parte do Curso Matemática Brow, iniciando como designer freelancer e atuando na criação de artes para mídias sociais. Com o avanço dos meus estudos e a crescente demanda por digitalização do curso, fui efetivado em 2024 e assumi a responsabilidade pelo desenvolvimento da plataforma Browflix.</p> <p>Atualmente, sou responsável pelo design, gerenciamento e manutenção da plataforma, além da criação de landing pages e campanhas para promover os cursos. Minha atuação combina design gráfico, UI/UX e desenvolvimento front-end, garantindo experiências visuais e funcionais de alta qualidade.</p> <p>esenvolvimento Web e Plataformas: Experiência com WordPress, HTML, CSS, JavaScript, Typescript, Java e Python além de ferramentas de design como Adobe Photoshop, Illustrator, After Effects, InDesign e Figma.</p>',
    },
    {
      summary: {
        strong: 'Enter Agência Digital - Designer Gráfico',
        p: 'CLT | Maio 2023 - Fevereiro 2024',
      },
      text: '<p>De maio de 2023 a fevereiro de 2024, atuei na Enter Agência de Marketing Digital, iniciando como Designer e alcançando o cargo de Diretor de Imagem. Durante esse período, trabalhei com grandes marcas do cenário paraense, como Gama Lopes, Feirão da Construção e Armazém, além de desenvolver estratégias de marketing político para as redes sociais da Deputada Alessandra Haber.</p> <p>Em um ambiente altamente competitivo e com grande fluxo de demanda diária, desenvolvi habilidades essenciais para lidar com prazos curtos, adaptação a diferentes formatos de materiais gráficos e entrega de alto desempenho.</p> <p>Gestão e Direção Criativa: Liderança na concepção visual de projetos, garantindo alinhamento com a identidade das marcas.</p> <p>Trabalho sob Pressão: Capacidade de entrega rápida e eficiente em um ambiente de alto desempenho.</p> <p>Domínio do Pacote Adobe: Photoshop, Illustrator, After Effects e InDesign.</p>',
    },
    {
      summary: {
        strong: 'Sefá Pará - Estágio',
        p: 'Estagiario | Julho 2021 - Maio 2023',
      },
      text: '<p>Estagiei na Secretaria de Estado da Fazenda, atuando na área de Administração, mas me destacando pelos meus conhecimentos em design gráfico. Durante esse período, trabalhei de forma autônoma em projetos de grande porte, assumindo a responsabilidade pela criação de diversos materiais visuais.</p> <p>Entre os projetos de maior impacto, destaco: Criação dos layouts dos crachás institucionais; Desenvolvimento de todo o material gráfico e logo do projeto Jornada Colaborativa; Apoio na produção de materiais para o Encontro de Gestão Fazendária;</p> <p>Meu trabalho foi reconhecido ao final do estágio, com todos os projetos sendo apresentados no Relatório Gerencial de 2022, destacando minha contribuição para a comunicação visual da instituição.</p>',
    },
    {
      summary: {
        strong: 'Diretor de Projetos - Plane Design',
        p: 'Projeto Academico Freelancer |  Novembro 2022 - Junho 2024',
      },
      text: '<p>Durante minha graduação, participei de um projeto de finalização de curso que envolvia a criação da identidade visual de uma empresa. Aproveitando essa oportunidade, percebi que, como freelancer, meus contratos, propostas comerciais e projetos ainda não possuíam uma identidade definida.</p> <p>Dessa necessidade surgiu a Plane Design, uma solução que consolidou minha marca pessoal e profissional, organizando minha atuação no mercado. O projeto se destacou tanto que fui aprovado com nota máxima. Hoje, todos os contratos e projetos que desenvolvo são representados por essa identidade, garantindo uma comunicação visual forte e padronizada.</p> <p>A Plane Design representa não apenas um projeto acadêmico bem-sucedido, mas também uma evolução da minha trajetória como designer e desenvolvedor.</p> <p>Gestão e Direção de Projetos: Liderança no planejamento e execução de grandes projetos; Domínio de Ferramentas: Adobe Photoshop, Illustrator, After Effects, InDesign, Figma e WordPress; Desenvolvimento Web: Conhecimentos em HTML, CSS e JavaScript para criação de interfaces visuais dinâmicas. </p>',
    },
    {
      summary: {
        strong: 'Designer - Gemelo Consultoria e Marketing',
        p: 'Freelancer | Agosto 2021 - Dezembro 2022',
      },
      text: '<p>Atuei como freelancer na Gemelo Consultoria e Marketing, onde pude trabalhar com conteúdo de forma criativa e inovadora, contribuindo para a identidade visual e comunicação de diversos projetos.</p> <p>Criação de campanhas e projetos utilizando Adobe Photoshop, Illustrator, After Effects e InDesign; Produção de conteúdo para redes sociais, garantindo engajamento e impacto visual; Desenvolvimento de identidades visuais, incluindo logos, branding e materiais institucionais; Produção de materiais gráficos diversos, como panfletos, banners e camisetas, adaptando a comunicação para diferentes formatos e públicos.</p>',
    },
  ]);
}
