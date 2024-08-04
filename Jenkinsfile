pipeline {
    agent any

    environment {
        DOCKER_WORKDIR = '/c/ProgramData/Jenkins/.jenkins/workspace/cypresstests'
    }
   stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        stage('Run Cypress Tests') {
            steps {
                script {
                    docker.image('cypress/base:14.16.0').inside("-u root -w ${env.DOCKER_WORKDIR} -v ${env.DOCKER_WORKDIR}:${env.DOCKER_WORKDIR} -v ${env.DOCKER_WORKDIR}@tmp:${env.DOCKER_WORKDIR}@tmp") {
                        sh 'npm install'
                        sh 'npx cypress run'
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**, cypress/videos/**', allowEmptyArchive: true
            junit 'cypress/results/*.xml'
        }
    }
}