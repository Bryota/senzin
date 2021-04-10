<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'category_name' => '食べ物'
            ],
            [
                'category_name' => '掃除'
            ],
            [
                'category_name' => '健康'
            ],
            [
                'category_name' => 'スポーツ'
            ],
            [
                'category_name' => '機械'
            ],
            [
                'category_name' => 'その他'
            ],
        ]);
    }
}
