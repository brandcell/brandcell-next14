type User = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
    "lat": string,
    "lng": string
    }
    },
    "phone": string,
    "website": string,
    "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
    }
    }

type Post = {
    "userId": string,
    "id": string,
    "title": string,
    "body": string
  }

type Meta = {
    id: string, 
    title: string,
    date: string,
    tags: string[],
    author:string,
    cover:string,
    minuteRead:string
}

type BlogPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>
}