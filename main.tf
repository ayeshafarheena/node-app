provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "myec2" {
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t2.medium"

  tags = {
    Name = "MyServer"
  }
}
