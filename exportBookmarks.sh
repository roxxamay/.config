#!/bin/bash

tput setaf 5

cat <<"EOF"

━━━━┏┓━━━━━━━━━━┏┓━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┏┓━━━━━━━┏┓━━━━━━━━━━━━━━┏┓━━━━━━━━━━━━━
━━━━┃┃━━━━━━━━━━┃┃━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┏┛┗┓━━━━━━┃┃━━━━━━━━━━━━━┏┛┗┓━━━━━━━━━━━━
┏━━┓┃┗━┓┏━━┓┏━━┓┃┃┏┓┏┓┏━┓━┏━━┓━━━━┏━━┓┏┓┏┓┏━┓┏━┓┏━━┓┏━┓━┗┓┏┛━━━━┏━┛┃┏┓┏━┓┏━━┓┏━━┓┗┓┏┛┏━━┓┏━┓┏┓━┏┓
┃┏━┛┃┏┓┃┃┏┓┃┃┏━┛┃┗┛┛┣┫┃┏┓┓┃┏┓┃━━━━┃┏━┛┃┃┃┃┃┏┛┃┏┛┃┏┓┃┃┏┓┓━┃┃━━━━━┃┏┓┃┣┫┃┏┛┃┏┓┃┃┏━┛━┃┃━┃┏┓┃┃┏┛┃┃━┃┃
┃┗━┓┃┃┃┃┃┃━┫┃┗━┓┃┏┓┓┃┃┃┃┃┃┃┗┛┃━━━━┃┗━┓┃┗┛┃┃┃━┃┃━┃┃━┫┃┃┃┃━┃┗┓━━━━┃┗┛┃┃┃┃┃━┃┃━┫┃┗━┓━┃┗┓┃┗┛┃┃┃━┃┗━┛┃
┗━━┛┗┛┗┛┗━━┛┗━━┛┗┛┗┛┗┛┗┛┗┛┗━┓┃━━━━┗━━┛┗━━┛┗┛━┗┛━┗━━┛┗┛┗┛━┗━┛━━━━┗━━┛┗┛┗┛━┗━━┛┗━━┛━┗━┛┗━━┛┗┛━┗━┓┏┛
━━━━━━━━━━━━━━━━━━━━━━━━━━┏━┛┃━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┏━┛┃━
━━━━━━━━━━━━━━━━━━━━━━━━━━┗━━┛━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┗━━┛━
EOF

# Get the current working directory
CURRENT_DIR=$(pwd)

# Copy the bookmarks file to the current working directory with a date-stamped filename
cp ~/.config/chromium/Default/Bookmarks "$CURRENT_DIR/Bookmarks"




#intro

tput setaf 5

cat <<"EOF"

░▄▀▀▄░█░▒█░█▀▀░█░░░░█▀█░█▀▀▀░░▀░░▀█▀░░░░█▀▀░█░░░
░█▄▄█░█░▒█░▀▀▄░█▀▀█░▒▄▀░█░▀▄░░█▀░░█░░▄▄░▀▀▄░█▀▀█
░█░░░░░▀▀▀░▀▀▀░▀░░▀░█▄▄░▀▀▀▀░▀▀▀░░▀░░▀▀░▀▀▀░▀░░▀

EOF

#command to backup everything inside the project folder

cat <<"EOF"

░█▀▀▄░█▀▄░█▀▄░░▀░░█▀▀▄░█▀▀▀░░░█▀▀▄░█░░█░
░█▄▄█░█░█░█░█░░█▀░█░▒█░█░▀▄░░░█▄▄█░█░░█░
░▀░░▀░▀▀░░▀▀░░▀▀▀░▀░░▀░▀▀▀▀░░░▀░░▀░▀▀░▀▀

EOF

git add --all .

#give the comment is you want


git commit -m "bookmarks updated"

if grep -q main .git/config; then
        echo "Using main"
            git push -u origin main
fi

if grep -q master .git/config; then
        echo "Using master"
            git push -u origin master
fi

cat <<"EOF"

░█▀▀▀░░▀░░▀█▀░░░▄▀▀▄░█░▒█░█▀▀░█░░░░░░█▀▄░▄▀▀▄░█▀▀▄░█▀▀
░█░▀▄░░█▀░░█░░░░█▄▄█░█░▒█░▀▀▄░█▀▀█░░░█░█░█░░█░█░▒█░█▀▀
░▀▀▀▀░▀▀▀░░▀░░░░█░░░░░▀▀▀░▀▀▀░▀░░▀░░░▀▀░░░▀▀░░▀░░▀░▀▀▀

EOF
