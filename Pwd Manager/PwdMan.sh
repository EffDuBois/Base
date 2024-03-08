#!/bin/bash

# Password manager file
PASSWORD_FILE="$HOME/.passwords.gpg"

# Function to store a password
store_password() {
    echo -n "Enter account name: "
    read account

    echo -n "Do you want to generate a random password? (y/n): "
    read generate_password

    if [ "$generate_password" == "y" ]; then
        password=$(openssl rand -base64 12)
    else
        echo -n "Enter password: "
        read -s password
    fi

    # Encrypt the password before storing it
    echo "$account:$password" | gpg --quiet --batch --yes --encrypt --recipient user@example.com -o - >> "$PASSWORD_FILE"
    echo "Password stored securely."
}

# Function to retrieve a password
retrieve_password() {
    echo -n "Enter account name: "
    read account
    password=$(gpg --quiet --batch --yes --decrypt "$PASSWORD_FILE" | grep -E "^$account:" | cut -d ':' -f 2)
    
    if [ -n "$password" ]; then
        echo "Password for $account: $password"
    else
        echo "Account not found."
    fi
}

# Function to generate GPG key pair
generate_gpg_key() {
    echo "Generating GPG key pair..."
    echo -n "Enter your name: "
    read name
    echo -n "Enter your email: "
    read email
    gpg --quiet --batch --yes --gen-key <<EOF
        Key-Type: RSA
        Key-Length: 4096
        Subkey-Type: rsa
        Subkey-Length: 4096
        Name-Real: $name
        Name-Email: $email
        Expire-Date: 0
EOF
    echo "GPG key pair generated."
}

# Main menu
while true; do
    clear
    echo "Password Manager"
    echo "1. Generate GPG Key Pair"
    echo "2. Store Password"
    echo "3. Retrieve Password"
    echo "4. Backup GPG Key Pair"
    echo "5. Exit"
    read -p "Select an option: " choice

    case $choice in
        1)
            generate_gpg_key
            ;;
        2)
            store_password
            ;;
        3)
            retrieve_password
            ;;
        4)
            echo "Backing up GPG key pair..."
            gpg --quiet --batch --yes --export-secret-keys -a > "$HOME/gpg_key_backup.asc"
            echo "GPG key pair backed up to $HOME/gpg_key_backup.asc"
            ;;
        5)
            echo "Goodbye!"
            exit 0
            ;;
        *)
            echo "Invalid choice. Please select a valid option."
            ;;
    esac

    read -p "Press Enter to continue..."
done
