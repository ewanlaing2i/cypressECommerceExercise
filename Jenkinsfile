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
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        stage('Run Cypress Tests') {
            steps {
                script {
                    // Converting Windows path to Unix path for Docker
                    def workspaceUnixPath = sh(script: 'cygpath -u "$WORKSPACE"', returnStdout: true).trim()

                    // Running Cypress tests within Docker
                    sh """
                        docker run --rm \
                        -v ${workspaceUnixPath}:/e2e \
                        -w /e2e \
                        cypress/base:14.16.0 \
                        npx cypress run --reporter junit --reporter-options "mochaFile=results/test-output-[hash].xml"
                    """
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'results/test-output-*.xml', allowEmptyArchive: true
            junit 'results/test-output-*.xml'
        }
    }
}