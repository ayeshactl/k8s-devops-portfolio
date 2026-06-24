pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ayeshactl/k8s-devops-portfolio.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'docker build -t backend-api:1.0 ./backend || true'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t frontend-app:1.0 ./frontend || true'
            }
        }

        stage('Verify Images') {
            steps {
                sh 'docker images'
            }
        }
    }
}
