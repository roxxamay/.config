#!/bin/bash

tput setaf 5

cat <<"EOF"

░▒█▀▀▄░▄▀▀▄░█▀▄░█▀▀░▒█▀▀▄░▄▀▀▄░█▀▄▀█░█▀▀▄░░▀░░█▀▀▄░█▀▀░█▀▀▄
░▒█░░░░█░░█░█░█░█▀▀░▒█░░░░█░░█░█░▀░█░█▀▀▄░░█▀░█░▒█░█▀▀░█▄▄▀
░▒█▄▄▀░░▀▀░░▀▀░░▀▀▀░▒█▄▄▀░░▀▀░░▀░░▒▀░▀▀▀▀░▀▀▀░▀░░▀░▀▀▀░▀░▀▀

EOF


echo
echo
echo

cat <<"EOF"

░▒█▀▀▀█░▀█▀░█▀▀▄░█▀▀▄░▀█▀░░▀░░█▀▀▄░█▀▀▀░░░▀█▀░█░░░░█▀▀░░░█▀▀░░▀░░█░░█▀▀░░░█▀▄░▄▀▀▄░█▀▀▄░█▀▀░▄▀▀▄░█░░░▀░░█▀▄░█▀▀▄░▀█▀░░▀░░▄▀▀▄░█▀▀▄░░░▄▀▀▄░█▀▀▄░▄▀▀▄░█▀▄░█▀▀░█▀▀░█▀▀░░░░░░░░░
░░▀▀▀▄▄░░█░░█▄▄█░█▄▄▀░░█░░░█▀░█░▒█░█░▀▄░░░░█░░█▀▀█░█▀▀░░░█▀░░░█▀░█░░█▀▀░░░█░░░█░░█░█░▒█░▀▀▄░█░░█░█░░░█▀░█░█░█▄▄█░░█░░░█▀░█░░█░█░▒█░░░█▄▄█░█▄▄▀░█░░█░█░░░█▀▀░▀▀▄░▀▀▄░▄▄░▄▄░▄▄
░▒█▄▄▄█░░▀░░▀░░▀░▀░▀▀░░▀░░▀▀▀░▀░░▀░▀▀▀▀░░░░▀░░▀░░▀░▀▀▀░░░▀░░░▀▀▀░▀▀░▀▀▀░░░▀▀▀░░▀▀░░▀░░▀░▀▀▀░░▀▀░░▀▀░▀▀▀░▀▀░░▀░░▀░░▀░░▀▀▀░░▀▀░░▀░░▀░░░█░░░░▀░▀▀░░▀▀░░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀▀░▀▀░▀▀

EOF
echo
echo
echo

cat <<"EOF"

░▀█▀░█▀▀▄░░▀░░▀█▀░░▀░░█▀▀▄░█░░░▀░░▀▀█░░▀░░█▀▀▄░█▀▀▀░░░▀█▀░█░░░░█▀▀░░░▄▀▀▄░█░▒█░▀█▀░▄▀▀▄░█░▒█░▀█▀░░░█▀▀░░▀░░█░░█▀▀░░░░░░░░░
░▒█░░█░▒█░░█▀░░█░░░█▀░█▄▄█░█░░░█▀░▄▀▒░░█▀░█░▒█░█░▀▄░░░░█░░█▀▀█░█▀▀░░░█░░█░█░▒█░░█░░█▄▄█░█░▒█░░█░░░░█▀░░░█▀░█░░█▀▀░▄▄░▄▄░▄▄
░▄█▄░▀░░▀░▀▀▀░░▀░░▀▀▀░▀░░▀░▀▀░▀▀▀░▀▀▀░▀▀▀░▀░░▀░▀▀▀▀░░░░▀░░▀░░▀░▀▀▀░░░░▀▀░░░▀▀▀░░▀░░█░░░░░▀▀▀░░▀░░░░▀░░░▀▀▀░▀▀░▀▀▀░▀▀░▀▀░▀▀

EOF

# Output file name
output_file="ExportedContent.txt"

# Clear the output file or create it if it doesn't exist
> "$output_file"
echo
echo
echo

cat <<"EOF"

░▒█▀▀▀█░█▀▀░█▀▀▄░█▀▀▄░█▀▄░█░░░░░▀░░█▀▀▄░█▀▀▀░░░█▀▀░▄▀▀▄░█▀▀▄░░░█▀▀░░▀░░█░░█▀▀░█▀▀
░░▀▀▀▄▄░█▀▀░█▄▄█░█▄▄▀░█░░░█▀▀█░░█▀░█░▒█░█░▀▄░░░█▀░░█░░█░█▄▄▀░░░█▀░░░█▀░█░░█▀▀░▀▀▄
░▒█▄▄▄█░▀▀▀░▀░░▀░▀░▀▀░▀▀▀░▀░░▀░▀▀▀░▀░░▀░▀▀▀▀░░░▀░░░░▀▀░░▀░▀▀░░░▀░░░▀▀▀░▀▀░▀▀▀░▀▀▀

EOF

# Export contents of .sh, .cpp, and .c files
find . -type f \( -name "*.sh" -o -name "*.cpp" -o -name "*.c" \) -exec sh -c 'echo "Appending content of $1"
echo "---- $1 ----" >> '"$output_file"'
cat "$1" >> '"$output_file"'
echo -e "\n\n" >> '"$output_file"'' _ {} \;
echo
echo
echo
echo "All contents have been written to $output_file"
