import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet
    ReactiveFormsModule, CommonModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatLabel, MatIcon, MatInputModule, AnimateOnScrollModule, AvatarModule,
    ButtonModule, MatFormField, RouterModule, MatToolbar, MatOption, MatSelectModule, MatProgressBar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'my-portfolio';
  showMore = false;

  // ---------------------------
  // 👤 Hero / Typing Animation
  // ---------------------------
  texts: string[] = [
    "Sarang Nath E K ",
    "Front-End Developer ",
    "Back-End Developer ",
    "MEARN Developer ",
    "Full-Stack Developer "
  ];
  typingText: string = "";
  private index: number = 0;
  private charIndex: number = 0;
  private isDeleting: boolean = false;
  private typingTimeout: any;

  projectsCount: number = 0;
  commitsCount: number = 0;
  contactForm: FormGroup;
  menuOpen = false;
  // 🛠️ Tech Stack
  techStack = [
    { name: 'HTML5', icon: 'assets/html-5.png' },
    { name: 'CSS3', icon: 'assets/css-3.png' },
    { name: 'Bootstrap', icon: 'assets/bootstrap.png' },
    { name: 'TailwindCSS', icon: 'assets/tailwindcss.png' },
    { name: 'JavaScript', icon: 'assets/javascript.png' },
    { name: 'Angular', icon: 'assets/angular.png' },
    { name: 'React', icon: 'assets/react.png' },
    { name: 'Node.js', icon: 'assets/nodejs.png' },
    { name: 'MongoDB', icon: 'assets/mongodb.png' },
    { name: 'Git', icon: 'assets/git.png' },
    { name: 'VS Code', icon: 'assets/visual-studio-code.png' },
    { name: 'Npm', icon: 'assets/npm.png' }
  ];
  technicalSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 85 },
    { name: 'Angular', level: 85 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
        { name: 'MongoDb', level: 85 },

  ];

  professionalSkills = [
    { name: 'Communication', level: 90 },
    { name: 'Teamwork', level: 95 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Creativity', level: 80 }
  ];
  // 📂 Projects
  projects = [

    // {
    //   title: 'Xpenso - Expense Tracker',
    //   description: 'A personal finance tracker built with Angular & Node.js.',
    //   tech: ['Angular', 'Node.js', 'MongoDB'],
    //   image: '',
    //   live: 'https://your-demo-link.com',
    //   github: 'https://github.com/your-repo/xpenso'
    // },

    {
      title: ' MEDIHUB ',
      description: ' It’s short, professional, and combines "Medical" and "Hub", implying a centralized system for hospital and appointment management.',
      tech: ['Angular', 'Angular Material', 'Express', 'NodeJs', 'MongoDB'],
      image: 'assets/MediHub.png',
      live: 'https://medi-hub-liard.vercel.app/home',
      github: 'https://github.com/Sarangnadh/MediHub'
    },

    {
      title: 'AURA TRAVEL',
      description: ' Aura Travel app likely focuses on offering users a best experience to discover, plan, and schedule trips. ',
      tech: ['Angular', 'Bootstrap', 'Angular Material'],
      image: 'assets/auraTravel.png',
      live: 'https://mytravels-xi.vercel.app/',
      github: 'https://github.com/Sarangnadh/mytravels'
    },

    {
      title: 'AURA EMPLOYEES',
      description: 'The project about Employee registration, employee profile updating and deleting. ',
      tech: ['NextJs', 'Aceternity UI'],
      image: 'assets/auraEmployee.png',
      live: 'https://auraemployees.vercel.app/',
      github: 'https://github.com/Sarangnadh/auraemployees'
    },
    {
      title: 'AURA SPACES',
      description: 'The website will serve as a platform to display the company’s projects, offer services, and attract potential clients.',
      tech: ['NextJs',],
      image: 'assets/auraSpaces.png',
      live: 'https://auraspaces.vercel.app/',
      github: 'https://github.com/Sarangnadh/auraspaces'
    },
    {
      title: 'AURA INSTITUTE',
      description: 'The project about Institute informations and courses they provide.',
      tech: ['Angular', 'Bootstap'],
      image: 'assets/auraInsti.png',
      live: 'https://auraiif.vercel.app',
      github: 'https://github.com/Sarangnadh/aurinstitude'
    },
    {
      title: 'NETFLIXWEB ',
      description: 'The Netflix Web Project is likely focused on creating a platform for streaming movies and TV shows, inspired by Netflix’s functionality.',
      tech: ['React',],
      image: 'assets/netflix.png',
      live: 'https://steady-entremet-a44a2a.netlify.app/',
      github: 'https://github.com/your-repo/portfolio'
    },
    {
      title: 'DOCTOR-APPOINTMENT',
      description: ' The Doctor Appointment Project focuses on creating a streamlined platform for patients to book, view, and manage their doctor appointments.',
      tech: ['NextJs',],
      image: 'assets/doctorAPP.png',
      live: 'https://doctor-appointment-sepia.vercel.app/',
      github: ''
    },
    {
      title: 'RESTAURNT-APP',
      description: 'The project focuses on providing an online platform for ordering food from restaurants.',
      tech: ['React', 'Bootstap'],
      image: 'assets/restaurantAPP.png',
      live: 'https://ephemeral-kulfi-5b17d0.netlify.app ',
      github: ''
    },
    {
      title: 'BANK-APP',
      description: 'The Bank App Project focuses on providing users with a secure platform for managing their banking needs, including account registration, login, delete,and transaction processing.',
      tech: ['Angular', 'Bootstap'],
      image: 'assets/bankApp.png',
      live: 'https://bankapp-beryl.vercel.app/',
      github: 'https://github.com/Sarangnadh/Bankapp'
    },

    {
      title: 'CLOUDKITCHENWEB ',
      description: 'The project focuses on providing an online platform for ordering food from restaurants.',
      tech: ['Angular', 'Bootstap'],
      image: 'assets/cloudKitchenWeb.png',
      live: 'https://cloudkitchenWeb-two.vercel.app/',
      github: 'https://github.com/Sarangnadh/Cloudkitchenweb'
    },

    {
      title: 'IMAGE SEARCH APP ',
      description: 'This project provides an intuitive interface where users can input search terms or upload images to find relevant images from a external Api.',
      tech: ['Html', 'Css', 'Javascript'],
      image: 'assets/imageApp.png',
      live: 'https://imageapp-three.vercel.app/',
      github: 'https://github.com/Sarangnadh/imageapp'
    },

    {
      title: 'Portfolio Website',
      description: 'My personal portfolio showcasing projects & skills.',
      tech: ['Angular', 'PrimeNG', 'Material'],
      image: 'assets/projects/portfolio.png',
      live: 'https://your-demo-link.com',
      github: 'https://github.com/your-repo/portfolio'
    }
  ];

  requirements: string[] = [
    'Web Development',
    'UI/UX Design',
    'Backend Development',
    'Frontend Development',
    'Mobile App Development',
    'Full-Stack Project',
    'Consultation / Other'
  ];
  // ---------------------------
  // 📩 Contact Form
  // ---------------------------
  constructor(private fb: FormBuilder, private http: HttpClient, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      requirement: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  // ---------------------------
  // 🚀 Lifecycle Hooks
  // ---------------------------
  ngOnInit() {
    this.typeEffect();
  }
  toggleView() {
    this.showMore = !this.showMore;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


  // ⌨️ Typing Effect
  private typeEffect() {
    const text = this.texts[this.index];

    if (this.isDeleting) {
      this.typingText = text.substring(0, this.charIndex--);
    } else {
      this.typingText = text.substring(0, this.charIndex++);
    }

    if (!this.isDeleting && this.charIndex === text.length) {
      this.isDeleting = true;
      this.typingTimeout = setTimeout(() => this.typeEffect(), 1500);
      return;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.index = (this.index + 1) % this.texts.length;
    }

    this.typingTimeout = setTimeout(() => this.typeEffect(), this.isDeleting ? 80 : 120);
  }

  //  Contact Form
  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post('https://contactserver-p7jz.onrender.com/api/contact', this.contactForm.value).subscribe({
        next: (res) => {
          this.snackBar.open('✅ Your message has been sent!', 'Close', {
            duration: 4000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
          });

          this.contactForm.reset();

          // 🔹 Scroll to home after success
          setTimeout(() => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
              homeSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 500); // wait a little so user sees toast
        },
        error: (err) => {
          this.snackBar.open('❌ ' + (err.error.error || 'Failed to send message'), 'Close', {
            duration: 4000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          });
        }
      });
    } else {
      this.snackBar.open('⚠️ Please fill all required fields!', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['warn-snackbar']
      });
    }
  }
}