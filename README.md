# NP Offloading Service

## Prerequisites  

Docker is require on the host machine to run this project. Links to installation is provided below.  
* [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)  
* [Install Docker Desktop on windows](https://docs.docker.com/desktop/install/windows-install/)  

## Installation  

### Build and run np-offloading-service with NodeJS inside a docker container  

1. Clone the project  
    ```
    git clone 
    ```

2. Checkout to dev branch  
    ```
    git checkout dev
    ```

3. Build the image on your machine  
    ```
    docker compose build
    ```  

4. Run the built image and infra with networking and databases
    ```
    docker compose up
    ```

5. Stop the running containers
    ```
    docker compose down
    ```  

## Access APIs

Once the container is up and running, APIs are available at this path:
```
http://localhost:3000/offloading/
```

## View Page from Browser (To be implemented)