pipeline {
    agent any

    environment {
        KUBECONFIG = '/root/.kube/config'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/ayeshactl/k8s-devops-portfolio.git'
            }
        }

        stage('Verify Cluster') {
            steps {
                sh 'kubectl get nodes'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                    echo "Applying Kubernetes manifests..."
                    kubectl apply -f k8s/

                    echo "Checking pods..."
                    kubectl get pods

                    echo "Checking services..."
                    kubectl get svc
                '''
            }
        }

        stage('Verify Ingress') {
            steps {
                sh 'kubectl get ingress'
            }
        }
    }

    post {
        success {
            echo "🚀 Deployment Successful!"
        }
        failure {
            echo "❌ Deployment Failed!"
        }
    }
}