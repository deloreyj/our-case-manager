### OUR Case Manager
Welccome to the case manager built for Operation Underground Railroad. The goal is to provide an app to organize the OUR team's work and help them make connections between the major entities in their domain -- Cases, Suspects, Victims, and Locations. Being able to easily map and maintain the relationships between these entities will enable the team to do their work faster and with more clarity about the entire scope of their impact. 

### Contributing
This project was created using Create React App. To contribute, clone the repository and run 
```bash
npm install
```

Most development of UI components is done using Storybook. To start the storybook dev server run
```bash
npm run storybook
```

To start the dev server at localhost:3000 run 
```bash
npm start
```

Tests are written with Jest and React Testing Library. To run the tests in watch mode run
```bash
npm test
```

New components should be generated using our Plop templates. The plop template will create 4 files -- a typescript component file, a css file, a test file, and a storybook file. To generate a component run the following command and answer the prompts.
```bash
npm run plop component
```