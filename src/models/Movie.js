import {v4 as uuid} from 'uuid'

const movies = [
  {
    _id: "a3682672-0ee4-1284-8759-35ee2533292v",
    title: 'Jungle Cruise',
    genre: 'Adventure',
    description: 'Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr. Lily Houghton, embarks on a perilous mission to change the world. Along with wisecracking skipper Frank Wolff, they navigate the treacherous Amazon in search of an ancient tree with unparalleled healing powers that could change the future of medicine.',
    imageUrl: '/img/jungle-cruise.jpeg',
    director: 'Jaume Collet-Serra',
    year: '2021',
    rating: 6.6,
    category: 'movie',
  },
  {
    _id: "z2682672-0ee4-1534-8759-35ee253329ty",
    title: 'Man of Steel',
    genre: 'Superhero',
    description: 'An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth. As he grows up, he struggles to discover who he really is and why he was sent here, ultimately becoming the world’s greatest protector: Superman.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_FMjpg_UX1000_.jpg',
    director: 'Zack Snyder',
    year: '2013',
    rating: 7.1,
    category: 'movie',
  },
];

export default class Movie{
  constructor(data){
    Object.assign(this,data)

    this._id = uuid()
  }

  static find(){
    return movies.slice()
  }

  getId(){
    return this._id
  }

  save(){
    movies.push(this)

    return this
  }
}