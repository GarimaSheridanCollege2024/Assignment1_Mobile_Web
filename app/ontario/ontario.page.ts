import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ontario',
  templateUrl: './ontario.page.html',
  styleUrls: ['./ontario.page.scss'],
})
export class OntarioPage implements OnInit {
  public records: any[] = []; // Initialize the records array
  public message!: string;

  constructor(
    private csvDataService: DataService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.csvDataService.getCovidData('assets/data.json').subscribe(data => {
      if (data) {
        this.records = data.slice(0, 20); // Adjust as necessary
      }
    });

    this.messageService.currentMessage.subscribe(message => this.message = message);
  }

  viewDetail(record: any) {
    this.router.navigate(['/ontario-detail', { data: JSON.stringify(record) }]);
  }
}
