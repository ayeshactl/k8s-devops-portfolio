pipeline {
    agent any

    environment {
        IMAGE_NAME = "backend-api:1.0"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ayeshactl/k8s-devops-portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME ./backend || true'
            }
        }

        stage('Verify Image') {
            steps {
                sh 'docker images | grep backend'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f k8s/ || true
                kubectl get pods
                kubectl get svc
                '''
            }
        }
    }
}
