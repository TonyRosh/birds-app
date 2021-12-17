import React from 'react'

function names() {

    const names = ['Thorstein',
    'Robina',
    'Jarad',
    'Vonny',
    'Marnia',
    'Tomlin',
    'Beverly',
    'Juliette',
    'Jillene',
    'Gay',
    'Beck',
    'Lydia',
    'Vonny',
    'Marnia',
    'Tomlin',
    'Beverly',
    'Reilly',
    'Gilburt',
    'Dory',
    'Broddie',
    'Briano',
    'Tomlin',
    'Beverly',
    'Reilly',
    'Gilburt',
    'Dory',
    'Broddie',
    'Briano',
    'Brita',
    'Joe',
    'Fancy']


const uniqueNames = []

names.forEach(name => {
    if (!uniqueNames.includes(name)) {
        uniqueNames.push(name)
    }
    return uniqueNames
})

console.log(uniqueNames)

    return (
        <></>
    )
}

export default names
