graph TD;
    User[User] -->|Request Reports| SystemController[Population System]
    User -->|Add New Dataset| SystemController
    User -->|Apply Security| SystemController
    User -->|Additional Functionality| SystemController

    classDef system fill:#f9f,stroke:#333,stroke-width:2px;
    class SystemController system;

    classDef user fill:#fff,stroke:#333,stroke-width:2px;
    class User user;
