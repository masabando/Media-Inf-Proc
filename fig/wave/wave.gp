
set sample 1000
set xrange [0:10]
set yrange [-4:4]
set xlabel "t"

set style line 1 lt 1 lw 4

set term pngcairo size 800,600 font "Arial, 20"
set output "wave1.png"
plot [0:2][-1.4:1.4] sin(2*pi*x) t "sin(2 PI t)" ls 1 lc rgb "#ff0000"

set output "wave2.png"
plot [0:2][-1.4:1.4] sin(4*pi*x) t "sin(4 PI t)" ls 1 lc rgb "#ff0000"

set output "wave3.png"
plot [0:10][-17:17] sin(2*pi*x) + 4*sin(2.5*pi*x) + 8*sin(0.6*pi*x) t "" lt 1 lw 2 lc rgb "#ff0000"


unset output
set term pop

