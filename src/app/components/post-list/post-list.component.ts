import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/app/models/ipost';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public posts: IPost[];
  user: User = {};
  autor: string;
  isLogged = false;
  Columns: string[] = ['id', 'titulo', 'acciones'];
  dataSource = new MatTableDataSource<IPost>(this.posts);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private postService: PostService ,  private localStorage: LocalStorageService,  ) { }


  ngOnInit(): void {
    if (localStorage.getItem('--token-Users&Posts') != null) {
      this.isLogged = true;
      console.log('isLogged', this.isLogged);
    }else{
    console.log('isLogged', this.isLogged);
    this.user = JSON.parse(this.localStorage.getToken());
    }
    this.autor = this.user.id;
    this.dataSource.paginator = this.paginator;
    this.getPost();
  }

  getPost = () => {
    this.postService.getQuery().subscribe(res => {
      this.posts = res;
      console.log('This posts', this.posts);
    });

  }
  getMyPosts = () => {
    this.postService.getuserPosts(`${this.user.id}`).subscribe((res) => {
      this.posts = res;
      console.log('Mis posts', this.posts);
    });
}
}
