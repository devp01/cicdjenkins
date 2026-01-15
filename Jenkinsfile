pipeline {
    agent any

    tools {
        nodejs 'node18'   // Configure in Jenkins global tools
    }

    environment {
        APP_NAME = 'ci-cd-lab'
        DEPLOY_DIR = '/tmp/ci-cd-lab'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'node -v'
                sh 'npm install'
                sh 'npm ci'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            when {
        expression {
            env.GIT_BRANCH == 'origin/main'
        }
            }

            steps {
                sh '''
                  echo "Deploying to server..."
                  rm -rf $DEPLOY_DIR/*
                  cp -r dist/* $DEPLOY_DIR/
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline succeeded'
        }
        failure {
            echo '❌ Pipeline failed'
        }
    }
}

