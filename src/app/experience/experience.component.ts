import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./experience.component.html",
  styleUrl: "./experience.component.scss",
})
export class ExperienceComponent {
  experienceItems = [
    {
      duration: "Sep 2022 - Present",
      heading: "Frontend Developer at Faclon Labs",
      description:
        "Leading frontend development initiatives at Faclon Labs, I spearheaded the creation of innovative solutions including a drag-and-drop form builder that reduced form creation time by 70%. Architected real-time data visualization dashboards processing 100k+ data points, and implemented performance optimizations that reduced page load times by 30%. My work directly contributed to a 40% improvement in user analysis capabilities. ",
    },
    {
      duration: "Sep 2021 - Sep 2022",
      heading: "Frontend Developer at Tagbin",
      description:
        "As a key developer for the prestigious PM Museum project in New Delhi, I built 30+ interactive applications using React.js. My implementations maintained 98% uptime while serving ~4000 daily visitors. Successfully adapted the Museum Management System for the Satya Sai Museum, reducing deployment time by 40% through efficient development practices.",
    },
    {
      duration: "Feb 2021 - Sep 2021 ",
      heading: "Frontend Developer at Prymus Brand Com. ",
      description:
        "Developed and enhanced the company's main website, implementing crucial features like login and payment systems that improved user success rates by 30%. Created a real-time news platform that increased page views by 60% through efficient API integration and responsive design principles. ",
    },
  ];
}
