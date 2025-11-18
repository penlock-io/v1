# Penlock

Print & assemble Penlock's cryptographic wheel, then follow the steps to split
your seed phrase into a 2-of-3 backup!

**Website:** [v1.penlock.io](https://v1.penlock.io)  
([English](https://v1.penlock.io/en/) | [Korean](https://v1.penlock.io/ko/))

**Links:**  
[Nostr](https://primal.net/p/nprofile1qqsr0maaa4aam8kgl6tu75ey6m9eqwkts8fm8262vflev44k7a33pccw8svqv)
| [Forum](https://github.com/penlock-io/v1/discussions) |
[Bug Reports](https://github.com/penlock-io/v1/issues) |
[Main Repository](https://github.com/penlock-io/v1)

## Keep Your Own Backup

You can maintain a copy of Penlock by forking, cloning, or downloading the
repository for your language:

-   [English](https://github.com/penlock-io/v1-en)
-   [Korean](https://github.com/penlock-io/v1-ko)

## Local Development

-   Clone the repository:  
     `git clone --recurse-submodules https://github.com/penlock-io/v1`
-   Run locally:  
     `npm install && npm start`
-   Before committing, please lint your code:  
     `npm run lint`

## Translation

We track translation progress by cloning the reference repository. After
committing translations, merge upstream updates to identify sections needing
updates through conflict markers.

-   Clone the English repository:  
     `git clone https://github.com/penlock-io/v1-en my-language`
-   Merge upstream changes:  
     `git pull https://github.com/penlock-io/v1-en`
