let robot = new robotbit.RobotBit();

// Movimento para frente
basic.forever(function () {
    robotbit.MotorRun(robotbit.Motors.M1, robotbit.Dir.CW, 100); // Motor 1 no sentido horário
    robotbit.MotorRun(robotbit.Motors.M2, robotbit.Dir.CW, 100); // Motor 2 no sentido horário
})

// Parar o movimento ao pressionar o botão A
input.onButtonPressed(Button.A, function () {
    robotbit.MotorStop(robotbit.Motors.M1); // Parar Motor 1
    robotbit.MotorStop(robotbit.Motors.M2); // Parar Motor 2
})

// Movimento para trás ao pressionar o botão B
input.onButtonPressed(Button.B, function () {
    robotbit.MotorRun(robotbit.Motors.M1, robotbit.Dir.CCW, 100); // Motor 1 no sentido anti-horário
    robotbit.MotorRun(robotbit.Motors.M2, robotbit.Dir.CCW, 100); // Motor 2 no sentido anti-horário
})

// Giro do robô ao pressionar os botões A e B
input.onButtonPressed(Button.AB, function () {
    robotbit.MotorRun(robotbit.Motors.M1, robotbit.Dir.CW, 100); // Motor 1 no sentido horário
    robotbit.MotorRun(robotbit.Motors.M2, robotbit.Dir.CCW, 100); // Motor 2 no sentido anti-horário
})
