"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResourceOptions = void 0;
exports.userResourceOptions = {
    navigation: {
        name: 'Administração',
        icon: 'Settings'
    },
    properties: {
        birth: {
            type: 'date'
        },
        password: {
            type: 'password'
        },
        role: {
            availableValues: [
                { value: 'admin', label: 'Administrador' },
                { value: 'user', label: 'Usuário Padrão' }
            ]
        }
    },
    editProperties: [
        'firstName',
        'lastName',
        'phone',
        'birth',
        'email',
        'password',
        'role'
    ],
    filterProperties: [
        'firstName',
        'lastName',
        'phone',
        'birth',
        'email',
        'role',
        'createdAt',
        'updatedAt'
    ],
    listProperties: [
        'id',
        'firstName',
        'email',
        'role'
    ],
    showProperties: [
        'id',
        'firstName',
        'lastName',
        'phone',
        'birth',
        'email',
        'role',
        'createdAt',
        'updatedAt'
    ],
};
