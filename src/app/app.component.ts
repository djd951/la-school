/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend-project';
  constructor() {
    console.log('AppComponent.constructor()')
  }

  ngOnInit(): void {
    console.log('AppComponent.ngOnInit()')
  }
}
*/
// app.component.ts
// app.component.ts
// app.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    siteName = "LA SCHOOL C'EST COOL !";
    subjects = [
        {
            name: 'Maths',
            icon: 'assets/maths.png',
            questions: [
                { question: 'Résous l\'équation différentielle suivante : dy/dx = e^x + y.', answer: 'y(x) = (1/2)e^x - 1' },
                { question: 'Quelle est la valeur de la somme infinie 1 + 1/2 + 1/4 + 1/8 + ...?', answer: 'La somme converge vers 2.' },
                { question: 'Trouve la dérivée seconde de la fonction f(x) = sin(x) + cos(x).', answer: 'f\'\'(x) = -2sin(x).' },
                { question: 'Si A et B sont des matrices 3x3 telles que AB - BA = I, montre que det(A)det(B) = 0.', answer: 'Si AB - BA = I, alors det(A)det(B) = 0.' },
                { question: 'Quelle est la probabilité de former un triangle avec trois allumettes aléatoirement placées sur une table ?', answer: '1/4 (25%)' }
            ]
        },
        {
            name: 'Physique',
            icon: 'assets/physique.png',
            questions: [
                { question: 'Explique le principe de la relativité restreinte d\'Einstein.', answer: 'La vitesse de la lumière est constante pour tous les observateurs inertiels.' },
                { question: 'Décris la loi de conservation de l\'énergie mécanique.', answer: 'L\'énergie mécanique totale d\'un système isolé reste constante.' },
                { question: 'Calcule la force électrique entre deux particules chargées en fonction de leur distance.', answer: 'La force électrique est proportionnelle à l\'inverse du carré de la distance.' },
                { question: 'Quelle est la signification physique de l\'entropie en thermodynamique ?', answer: 'L\'entropie mesure le désordre ou l\'incertitude dans un système.' },
                { question: 'Explique le phénomène de diffraction des ondes.', answer: 'La diffraction est la flexion des ondes autour d\'un obstacle ou à travers une ouverture.' }
            ]
        },
        {
            name: 'Informatique',
            icon: 'assets/informatique.png',
            questions: [
                { question: 'Explique le concept de programmation orientée objet.', answer: 'La programmation orientée objet consiste à organiser le code en objets qui ont des propriétés et des méthodes.' },
                { question: 'Quelle est la différence entre la programmation synchrone et asynchrone ?', answer: 'La programmation synchrone exécute une tâche à la fois, tandis que la programmation asynchrone permet l\'exécution simultanée de plusieurs tâches.' },
                { question: 'Décris le fonctionnement d\'un algorithme de tri rapide (QuickSort).', answer: 'QuickSort est un algorithme de tri basé sur le principe de la division et de la conquête.' },
                { question: 'Qu\'est-ce que le modèle OSI et quel est son rôle dans les réseaux informatiques ?', answer: 'Le modèle OSI (Open Systems Interconnection) est une norme qui définit les différentes couches nécessaires pour la communication réseau.' },
                { question: 'Explique la différence entre SQL et NoSQL.', answer: 'SQL est un langage de requête structuré utilisé pour gérer les bases de données relationnelles, tandis que NoSQL est une approche de gestion de données qui ne dépend pas du modèle de base de données relationnelle.' }
            ]
        },
        {
            name: 'Histoire',
            icon: 'assets/histoire.png',
            questions: [
                { question: 'Quelles sont les principales causes de la Première Guerre mondiale ?', answer: 'Les principales causes incluent les alliances militaires, l\'impérialisme, le nationalisme et l\'assassinat de l\'archiduc François-Ferdinand.' },
                { question: 'Explique le rôle de Napoléon Bonaparte dans l\'histoire européenne.', answer: 'Napoléon Bonaparte était un général français qui est devenu empereur et a mené des campagnes militaires majeures en Europe.' },
                { question: 'Quels ont été les effets de la Révolution industrielle sur la société ?', answer: 'La Révolution industrielle a conduit à des changements économiques, sociaux et technologiques majeurs.' },
                { question: 'Décris les événements menant à la Guerre froide.', answer: 'La Guerre froide était une période de tension politique et militaire entre les États-Unis et l\'Union soviétique après la Seconde Guerre mondiale.' },
                { question: 'Quelle était l\'importance de la Déclaration des droits de l\'homme et du citoyen pendant la Révolution française ?', answer: 'La Déclaration des droits de l\'homme et du citoyen a souligné les droits fondamentaux et l\'égalité pendant la Révolution française.' }
            ]
        },
        {
            name: 'Français',
            icon: 'assets/francais.png',
            questions: [
                { question: 'Analyse la structure d\'un sonnet.', answer: 'Un sonnet est un poème de 14 vers avec une structure fixe de rimes.' },
                { question: 'Quelle est la différence entre la métaphore et la métonymie ?', answer: 'La métaphore compare deux éléments en établissant une relation implicite, tandis que la métonymie utilise un élément pour représenter un autre élément lié.' },
                { question: 'Décris les caractéristiques du mouvement littéraire du surréalisme.', answer: 'Le surréalisme était un mouvement artistique et littéraire du 20e siècle qui cherchait à libérer l\'expression créative de contraintes rationnelles.' },
                { question: 'Explique le concept de l\'ironie dans la littérature.', answer: 'L\'ironie est une figure de style qui utilise un langage qui semble signifier le contraire de ce qu\'il dit, souvent pour créer un effet humoristique ou satirique.' },
                { question: 'Quels sont les éléments clés d\'un bon argumentaire ?', answer: 'Un bon argumentaire comprend une thèse claire, des preuves solides et une structure logique.' }
            ]
        },
        {
            name: 'Anglais',
            icon: 'assets/anglais.png',
            questions: [
                { question: 'Translate: Hello', answer: 'Bonjour' },
                { question: 'Form the present continuous tense of "to eat."', answer: 'eating' },
                { question: 'Who wrote "Romeo and Juliet"?', answer: 'William Shakespeare' },
                { question: 'What is the capital of the United Kingdom?', answer: 'London' },
                { question: 'Complete the sentence: I _____ to the store yesterday.', answer: 'went' }
            ]
        },
        {
            name: 'Espagnol',
            icon: 'assets/espagnol.png',
            questions: [
                { question: 'Traduire : House', answer: 'Casa' },
                { question: 'Conjuguer le verbe "hablar" au présent de l\'indicatif.', answer: 'yo hablo, tú hablas, él/ella/Ud. habla, nosotros/as hablamos, vosotros/as habláis, ellos/as/Uds. hablan' },
                { question: 'Qui a peint "Guernica" ?', answer: 'Pablo Picasso' },
                { question: 'Quelle est la capitale de l\'Espagne ?', answer: 'Madrid' },
                { question: 'Compléter la phrase : Yo _____ (trabajar) en la oficina.', answer: 'trabajo' }
            ]
        },
        { name: 'Mes flash-cards', icon: 'assets/mesfc.png', questions: [] }
    ];

    selectedSubject: string | null = null;
    flashcards: any[] = [];
    newFlashcard = { question: '', answer: '' };
    userFlashcards: any[] = [];
    editingIndex: number | null = null;

    selectSubject(subject: string) {
        this.selectedSubject = subject;
        this.generateFlashcards();
    }

    getSubjectLabel(): string {
        switch (this.selectedSubject) {
            case 'Maths':
                return 'Flashcards de Maths';
            case 'Physique':
                return 'Flashcards de Physique';
            case 'Informatique':
                return 'Flashcards d\'Informatique';
            case 'Histoire':
                return 'Flashcards d\'Histoire';
            case 'Français':
                return 'Flashcards de Français';
            case 'Anglais' :
                return 'Flashcards d\'Anglais';
            case 'Espagnol':
                return 'Flashcards d\'Espagnol'
            default:
                return 'Mes Flashcards';
        }
    }

    generateFlashcards() {
        this.flashcards = [];

        const selectedSubject = this.getSelectedSubject();
        const questions = selectedSubject?.questions || [];

        this.flashcards = questions.map((qa, index) => ({
            subject: this.selectedSubject,
            question: qa.question,
            answer: `${qa.answer}`,
            revealed: false
        }));
    }

    private getSelectedSubject() {
        return this.subjects.find(subject => subject.name === this.selectedSubject);
    }

    revealAnswer(card: any) {
        card.revealed = !card.revealed;
    }

    getAnswerText(card: any): string {
        return card.answer;
    }

    addNewFlashcard() {
        if (this.newFlashcard.question && this.newFlashcard.answer) {
            if (this.editingIndex !== null) {
                this.userFlashcards[this.editingIndex] = { ...this.newFlashcard };
                this.editingIndex = null;
            } else {
                this.userFlashcards.push({ ...this.newFlashcard });
            }

            this.newFlashcard = { question: '', answer: '' };
        }
    }

    editFlashcard(index: number) {
        this.editingIndex = index;
        this.newFlashcard = { ...this.userFlashcards[index] };
    }

    deleteFlashcard(index: number) {
        if (confirm("Voulez-vous vraiment supprimer cette flash-card?")) {
            this.userFlashcards.splice(index, 1);
            this.editingIndex = null;
        }
    }
}
