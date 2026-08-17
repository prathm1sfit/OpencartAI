import { test, expect } from '@playwright/test';
import { RandomDataUtil } from '../../utils/dataGenerator';
import { Routes } from '../../api/endpoints/routes';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../env'), override: true });

test.describe('Authentication API Tests', () => {

    // ---------------------------------------------------------
    // Configuration
    // ---------------------------------------------------------

    const BASE_URL = process.env.API_BASE_URL || Routes.BASE_URL;
    const VALID_USERNAME = process.env.FAKESTORE_USERNAME || 'johnd';
    const VALID_PASSWORD = process.env.FAKESTORE_PASSWORD || 'm38rmF$';

    // ---------------------------------------------------------
    // POST - Successful Login
    // ---------------------------------------------------------

    test('POST - Successful Login @master @sanity @api', async ({ request }) => {

        const response = await request.post(`${BASE_URL}${Routes.AUTH_LOGIN}`, {
            data: {
                username: VALID_USERNAME,
                password: VALID_PASSWORD
            }
        });

        expect(response.status()).toBe(201);

        const responseBody = await response.json();

        expect(responseBody).toHaveProperty('token');
        expect(typeof responseBody.token).toBe('string');
        expect(responseBody.token.length).toBeGreaterThan(0);
    });

    // ---------------------------------------------------------
    // POST - Invalid Login
    // ---------------------------------------------------------

    test('POST - Invalid Login @master @regression @api', async ({ request }) => {

        const invalidCredentials = RandomDataUtil.generateInvalidLoginPayload();

        const response = await request.post(`${BASE_URL}${Routes.AUTH_LOGIN}`, {
            data: invalidCredentials
        });

        expect(response.status()).toBe(401);

        const responseBody = await response.text();

        expect(responseBody).toContain('username or password is incorrect');
    });
});