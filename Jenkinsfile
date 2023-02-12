pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo -n npm install"
                sh "sudo -n npm run build"
            }
        }
    }
}
