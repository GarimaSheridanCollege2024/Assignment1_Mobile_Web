import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-ontario-detail',
  templateUrl: './ontario-detail.page.html',
  styleUrls: ['./ontario-detail.page.scss'],
})
export class OntarioDetailPage implements OnInit {
  public record: any;
  public message: string = '';

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.record = JSON.parse(params['data']);
    });
  }

  sendMessage() {
    this.messageService.changeMessage(this.message);
  }

  goBack() {
    this.router.navigate(['/ontario']);
  }
}
