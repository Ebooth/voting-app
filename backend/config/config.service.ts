import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Character } from 'src/characters/entities/character.entity';

require('dotenv').config();

class ConfigService {

  constructor(private env: { [k: string]: string | undefined }) { }

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    const r: TypeOrmModuleOptions = {
      type: 'postgres',
      host: this.getValue('RDS_HOSTNAME', false) || this.getValue('POSTGRES_HOST'),
      port: parseInt(this.getValue('RDS_PORT', false), 10) || parseInt(this.getValue('POSTGRES_PORT'), 10),
      username: this.getValue('RDS_USERNAME', false) || this.getValue('POSTGRES_USER'),
      password: this.getValue('RDS_PASSWORD', false) || this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('RDS_DB_NAME', false) || this.getValue('POSTGRES_DATABASE'),
      entities: [Character],
    };
    console.log(r)
    return r
  }

}

const configService = new ConfigService(process.env)
  .ensureValues([
    'POSTGRES_HOST',
    'POSTGRES_PORT',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DATABASE'
  ]);

export { configService };