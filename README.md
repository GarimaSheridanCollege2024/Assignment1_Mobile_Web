# README

## Assignment Submission by Garima Saini

 Overview

This assignment covers COVID-19 updates and Ontario data, meeting all specified requirements.

 Components and Functionality

1. COVID-19 Updates Component
   - Displays key COVID-19 updates.

2. Status of Cases in Ontario Component
   - Shows current COVID-19 case status in Ontario.

3. Message Service
   - Enables sending and receiving messages.
   - Features a text area for input and a "Send Message" button.
   - Button becomes unclickable and changes to "Message Sent" once clicked.

4. Data Storage
   - Downloads and stores data in an external file.

5. List and Detail Page
   - Lists records and allows data selection for detailed view.
   - Displays detailed data with a back button for navigation.

 Implementation Details

# Ontario Tab (HTML)
<ion-list>
  <ion-item *ngFor="let record of records" (click)="viewDetails(record)">
    {{ record.report_date | date: 'MMM d, y' }}
  </ion-item>
</ion-list>

# Ontario Detail Page (HTML)

<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/ontario"></ion-back-button>
    </ion-buttons>
    <ion-title>Ontario Detail</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Details for {{ record.report_date | date:'MMM d, y' }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <!-- Display detailed data here -->
    </ion-card-content>
  </ion-card>

  <ion-item>
    <ion-label position="stacked">Message</ion-label>
    <ion-textarea [(ngModel)]="messageContent" placeholder="Write your message here..."></ion-textarea>
  </ion-item>

  <ion-button expand="full" (click)="sendMessage()" [disabled]="messageSent">
    {{ messageSent ? 'Message Sent' : 'Send Message' }}
  </ion-button>

  <ion-button expand="full" color="primary" (click)="goBack()">Back</ion-button>
</ion-content>


 User Experience

- Formatting and Layout
  - Applied proper formatting, layout, colors, background, size, and labeling.
  - Intuitive and user-friendly interface.

 Submission Details

- Git Backup
  - Created a backup using GIT and submitted it to Dropbox in the Assignment 1 folder.

 Conclusion

The assignment meets all requirements, demonstrating proficiency in Angular and Ionic frameworks with clear, functional, and visually appealing components.

 Author

Garima Saini  
Sheridan College
