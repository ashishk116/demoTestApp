## DemoRNApp

## Description

This is a React Native project built using React Native CLI, Redux for state management, Native Base for component library, and Vector Icons. The project implements login functionality handled through Redux by dispatching actions. Additionally, it retrieves a list of users from the API [https://randomuser.me/api/?results=10](https://randomuser.me/api/?results=10) and updates the list dynamically as the user scrolls.

## Prerequisites

- Node.js installed on your machine
- React Native CLI installed globally (`npm install -g react-native-cli`)

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd project-directory`
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Run the project on iOS: `npm run ios`
3. Run the project on Android: `npm run android`

## Folder Structure

- **/src**: Contains all the source code for the application.
  - **/components**: Reusable components.
  - **/store**: Redux files.
  - **/screens**: React Native screens.
  - **/routes**: Routes the application.
  - **/styles**: Global stylesheets.
  - **/types**: Constants.

## Redux State Management

- Redux is used for state management.
- Actions and reducers are defined in the `/actions` and `/reducers` directories respectively.

## Components
-Axios for api handling.
- Components are stored in the `/components` directory.
- Native Base is used for UI components.

## API Integration

- API requests are handled in the `/services` directory.
- User list is retrieved from [https://randomuser.me/api/?results=10](https://randomuser.me/api/?results=10).
- The list is updated dynamically as the user scrolls.

## Screenshots
![Simulator Screenshot - iPhone 15 Pro - 2024-05-23 at 21 48 21](https://github.com/ashishk116/demoTestApp/assets/50401674/cc189f5f-3b5a-4eec-906e-c1fedb4e2297)
![Simulator Screenshot - iPhone 15 Pro - 2024-05-23 at 21 48 15](https://github.com/ashishk116/demoTestApp/assets/50401674/fdc871a0-137e-4fd1-90b0-1ada58ee55aa)
![Simulator Screenshot - iPhone 15 Pro - 2024-05-23 at 21 48 01](https://github.com/ashishk116/demoTestApp/assets/50401674/0117fe1d-8687-4ae4-bb69-862186961783)
![Simulator Screenshot - iPhone 15 Pro - 2024-05-23 at 21 48 25](https://github.com/ashishk116/demoTestApp/assets/50401674/c7a0953a-022f-45d4-ac20-9f38b6f161ae)




## Customization

- Feel free to customize the components, styles, and functionality according to your project requirements.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or feature requests, please open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
