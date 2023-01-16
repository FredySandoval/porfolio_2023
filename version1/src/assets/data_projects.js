export const data_project = [
    {
        id: 0,
        header: 'Single Page App',
        markdown:
`## Creating a Sharing file app
See the demo at <a href="https://qim.fredy.dev" target="_blank">qim.fredy.dev</a> or check the <a href="https://github.com/FredySandoval/qim" target="_blank">CODE</a> in GitHub
### The problem to be solved:
I can be a real pain when you try to move pictures or files from your phone to your computer and the other way around
and also share files to another person across the internet.

### Project Description:
Qim.link is a fullstack project that allows users to upload files to the server and this creates a sharing link, 
if a picture is load the server will create a thumbnail for each picture, the service also allows the users to 
download all the files in a zip, or only download individual files.

### Highlights of the project:
- I created the little animation in Blender.
- It uses a small database to store information.
- Show previews for the image files.
- All through HTTPS.

### Technologies used:
- Blender (Graphics)
- NodeJS (Backend)
- Vue3 (Fronend)
- LowDB (Database)
`,
        imgCarrousel: [
            {
                "itemImageSrc": "/project_images/qim_2.png",
                "thumbnailImageSrc": "/project_images/thumb-qim_2.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/qim_1.png",
                "thumbnailImageSrc": "/project_images/thumb-qim_1.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/qim_3.png",
                "thumbnailImageSrc": "/project_images/thumb-qim_3.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/qim_4.png",
                "thumbnailImageSrc": "/project_images/thumb-qim_4.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
        ]
    },
    {
        id: 1,
        header: 'Single Page App',
        markdown:
            `## Building a data base micro service
See the demo at <a href="https://microdb.fredy.dev" target="_blank">microdb.fredy.dev</a> or check the <a href="https://github.com/FredySandoval/micro-db" target="_blank">CODE</a> in GitHub

### The problem to be solved:
Sometimes you want to store something really small, like a score counter, a views, or likes,
but building an entire infrastructure just for something small may not be worth it. 

### Project Description:
MicroDBs is a microservice that allows users to create collections and store data in it. It also has a schema validation, to prevent unwanted data.

### Highlights of the project:
- I built the Front-end, Back-End and Graphics.
- The database is capable to handle hundreds of collections.
- Users can add their own schema.
- uses HTTPS

### Technologies used:
- Blender (for the graphics)
- NodeJS (for Back-end)
- Vue, Vite, VitePress (Site Generator)
- Hosted on Google Cloud Platform (virtual machine)
`,
        imgCarrousel: [
            {
                "itemImageSrc": "/project_images/microdbs_1.png",
                "thumbnailImageSrc": "/project_images/thumb-microdbs_1.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/microdbs_2.png",
                "thumbnailImageSrc": "/project_images/thumb-microdbs_2.png",
                "alt": "Description for Image 2",
                "title": "Title 2"
            },
            {
                "itemImageSrc": "/project_images/microdbs_3.png",
                "thumbnailImageSrc": "/project_images/thumb-microdbs_3.png",
                "alt": "Description for Image 3",
                "title": "Title 3"
            },
            {
                "itemImageSrc": "/project_images/microdbs_4.png",
                "thumbnailImageSrc": "/project_images/thumb-microdbs_4.png",
                "alt": "Description for Image 3",
                "title": "Title 3"
            },
        ]
    },
    {
        id: 2,
        header: 'Documentation Site',
        markdown:
            `## Building a documentation Site from scratch.
See the demo at <a href="https://drive.fredy.dev" target="_blank">drive.fredy.dev</a> or check the <a href="https://github.com/FredySandoval/google-drive-api-usage-examples" target="_blank">CODE</a> in GitHub
### Problem to be solved:
The Google documentation API is quite hard to understand for general people, so I decided to create my own documentation
with simplicity in mind.

### Project Description:
In this project I built a documentation site called "Google Drive API Guide" 
which is site that provides information and instructions on how to use the Google Drive API to interact with the Google Drive service.

### Highlights of the project:
- All the documentation code was create by me.
- I learned very deeply how the Google Drive API works.
- I was able to fully understand the NodeJS API created by Google.
- I created my own image graphics.
- I fully understand how the authentication of Google APIs works.

### Technologies used:
- Blender (for the graphics)
- Vue, Vite, VitePress (Site Generator)
- Netlify (for deployment)
`,
        imgCarrousel: [
            {
                "itemImageSrc": "/project_images/drive_1.png",
                "thumbnailImageSrc": "/project_images/thumb-drive_1.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/drive_4.png",
                "thumbnailImageSrc": "/project_images/thumb-drive_4.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/drive_2.png",
                "thumbnailImageSrc": "/project_images/thumb-drive_2.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/drive_3.png",
                "thumbnailImageSrc": "/project_images/thumb-drive_3.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
        ]
    }
];

export const data_project_frontend = [
    {
        id: 1,
        header: 'Blog',
        markdown:
            `## Creating My own blog from ground up.
See the demo at <a href="https://fredy.dev" target="_blank">fredy.dev</a> or check the <a href="https://github.com/FredySandoval/fredy.dev" target="_blank">CODE</a> in GitHub
### Problem to be solved:
I wanted to have my own blog but with my specific style and beahvior.

### Project Description:
A blog site built from ground up.

### Highlights of the project:
- Here is an article I feel proud of: [Which Programming is faster at reading?](https://www.fredy.dev/tutorial/which-programming-language-is-faster-at-reading/)
- All articles are original.
- I learned a new technology.
- Full SEO compliant.
- Three-state darkmode button (light, dark, purple)

### Technologies used:
- Jekyll (Static Site Generator)
- Netlify (for deployment)
`,
        imgCarrousel: [
            {
                "itemImageSrc": "/project_images/blog_1.png",
                "thumbnailImageSrc": "/project_images/thumb-blog_1.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/blog_2.png",
                "thumbnailImageSrc": "/project_images/thumb-blog_2.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/blog_3.png",
                "thumbnailImageSrc": "/project_images/thumb-blog_3.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
       ]
    },
    {
        id: 2,
        header: 'Tube site',
        markdown:
`## Creating a Tube video site.
See the demo at <a href="https://tube.fredy.dev/" target="_blank">tube.fredy.dev</a> or check the <a href="https://github.com/FredySandoval/tube-site" target="_blank">CODE</a> in GitHub
### Problem to be solved:
I wanted to have a place to store all my favorite watched YouTube videos, and also keep practicing my coding skills.

### Project Description:
Is a site that behaves like a vide Tube site with tags.

### Highlights of the project:
- Static site (no server).
- All my favorite videos in one place.
- fully customizable.

### Technologies used:
- Jekyll (Static site Generator)
- Netlify (for deployment)
`,
        imgCarrousel: [
            {
                "itemImageSrc": "/project_images/tube_1.png",
                "thumbnailImageSrc": "/project_images/thumb-tube_1.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/tube_2.png",
                "thumbnailImageSrc": "/project_images/thumb-tube_2.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/tube_3.png",
                "thumbnailImageSrc": "/project_images/thumb-tube_3.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
       ]
    },
    {
        id: 3,
        header: 'VUE 3 Snake Game',
        markdown:
`## Creating a Tube video site.
See the demo at <a href="https://ecstatic-banach-c48c08.netlify.app/" target="_blank">Netlify</a>, Source code is not available.
### Problem to be solved:
How to build a Snake game only with vue logic.

### Project Description:
It's a game wich logic was made with VUE 3 only, and made with HTML components and Javascript.

### Highlights of the project:
- Great project to master VUE 3
- HTML, JavaScript only.
- VIM keys for snake movements.

### Technologies used:
- VUE 3 (Framework)
- Netlify (for deployment)
`,
        imgCarrousel: [
            {
                "itemImageSrc": "/project_images/snake_1.png",
                "thumbnailImageSrc": "/project_images/thumb-snake_1.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
       ]
    }
];
export const data_project_illustration = [
    {
        id: 1,
        header: 'Illustration',
        markdown:
`## Various Illustrations.

### Project Description:
This a small collection of tech illustration that can be used in different ways.

For more illustrations visit this: <a href="https://www.fredy.dev/tools/10-isometric-illustrations-for-your-next-dev-project/" target="_blank">Post 1</a>, <a href="https://www.fredy.dev/tools/i-made-8-illustrations-so-your-twitter-instagram-dev-post-can-rock/" target="_blank">Post 2</a>

### Technologies used:
- Blender (3D software)
`,
        imgCarrousel: [
            {
                "itemImageSrc": "/project_images/illus_1.png",
                "thumbnailImageSrc": "/project_images/thumb-illus_1.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/illus_2.png",
                "thumbnailImageSrc": "/project_images/thumb-illus_2.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/illus_3.png",
                "thumbnailImageSrc": "/project_images/thumb-illus_3.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/illus_4.png",
                "thumbnailImageSrc": "/project_images/thumb-illus_4.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/illus_5.png",
                "thumbnailImageSrc": "/project_images/thumb-illus_5.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/illus_6.png",
                "thumbnailImageSrc": "/project_images/thumb-illus_6.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "itemImageSrc": "/project_images/illus_7.png",
                "thumbnailImageSrc": "/project_images/thumb-illus_7.png",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
       ]
    }
];