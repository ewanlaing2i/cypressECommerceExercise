pipeline {
    agent {
        docker {
            image 'cypress/base:14.16.0' 
            args '-u root'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '**/cypress/videos/**/*.mp4', allowEmptyArchive: true
            archiveArtifacts artifacts: '**/cypress/screenshots/**/*.png', allowEmptyArchive: true
        }
    }
}