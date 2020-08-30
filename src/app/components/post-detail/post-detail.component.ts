import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/app/models/ipost';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  public post: IPost = {};
  private id: string;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    /**
     *  this.route.queryParamMap.subscribe(params => {this.id = params.get('id');});
     */
  }

  ngOnInit(): void {
    this.getPost(this.id);
  }

  getPost = (id: string) => {
    this.postService.get(id).subscribe(res => {
      this.post = res;
    });

  }

}
