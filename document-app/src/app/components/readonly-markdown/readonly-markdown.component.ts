import { Component, OnInit } from '@angular/core';
import {DocumentService} from '../../../services/document.service';

@Component({
  selector: 'app-readonly-markdown',
  templateUrl: './readonly-markdown.component.html',
  styleUrls: ['./readonly-markdown.component.less']
})
export class ReadonlyMarkdownComponent implements OnInit {
  markdownContent: string | undefined;
  constructor(
    private documentService: DocumentService
  ) {
    this.documentService.getDocument('index').then(res => {
      this.markdownContent = res;
    });
  }

  ngOnInit(): void {
  }

}
