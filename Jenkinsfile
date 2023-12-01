pipeline {
    agent any
 
    stages {
        stage('Checkout and Install Dependencies') {
            steps {
                script {
 
                    // Install project dependencies including Cypress
                    bat 'npm install'
                }
            }
        }
 
        stage('Run Cypress Tests') {
            steps {
                script {
                    //TEST
                    // Run Cypress tests
                    bat 'npx cypress run --spec cypress/e2e/mainTest.cy.js'
                }
            }
        }
    }

}