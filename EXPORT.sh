#!/bin/bash

# Output file name
output_file="all_files_content.txt"

# Clear the output file or create it if it doesn't exist
> "$output_file"

# Function to append file contents to the output file
append_content() {
    echo "Appending content of $1"
    echo "---- $1 ----" >> "$output_file"
    cat "$1" >> "$output_file"
    echo -e "\n\n" >> "$output_file"
}

# Export contents of .sh, .cpp, and .c files
find . -type f \( -name "*.sh" -o -name "*.cpp" -o -name "*.c" \) -exec bash -c 'append_content "$0"' {} \;

echo "All contents have been written to $output_file"
