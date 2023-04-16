<?php

namespace App\Console\Commands;

use App\Models\Chat;
use Illuminate\Console\Command;

class DeleteChatAfterMidnight extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'delete:chat';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete all chat after 12 midnight';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Chat::truncate();
    }
}
